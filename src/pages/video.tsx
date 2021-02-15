import {
    FC,
    useState,
    ChangeEvent,
    InputHTMLAttributes,
    FormEvent,
} from 'react';

// Styles
import { Container, DownloadBox, DownloadContainer } from '@styles/base';

// Components
import Input from '@components/Input';
import Select from '@components/Select';
import Button from '@components/Button';

// Swal
import Swal from 'sweetalert2';

// Services
import { axios } from 'src/services/api';
import Loading from '@components/Loading';

// Interfaces
interface IvideoResponse {
    filename: string;
    download: string;
    size: number;
    message: string;
};
interface IChangeEvent extends Omit<ChangeEvent, 'target'> {
    target: InputHTMLAttributes<{}>;
}



const pages: FC = () => {

    const [videoData, setVideoData] = useState({
        video_url: '',
        convert_to: 'mp4',
    })
    const [loading, setLoading] = useState(false)

    const handleChangeInput = (e: IChangeEvent) => {
        const fieldName = e.target.name;
        const newValue = e.target.value;
        setVideoData({
            ...videoData,
            [fieldName]: newValue,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        let status: number;
        let data: IvideoResponse;

        await axios.post('/videos', videoData)
            .catch((err) => {
                const { response } = err;
                status = response?.status;
                data = response?.data;
            })
            .then((response: any) => {
                status = response?.status;
                data = response?.data;
            });

        if (status === 200) {
            Swal.fire({
                icon: 'success',
                title: `Size: ${Math.round(data.size / 1024 / 1024)}Mb`,
                html: `<h3>${data.message}</h3><br><br><a target="_blank" rel="nofollow" href="${data.download}">CLICK HERE TO DOWNLOAD!</a>`,
                showCloseButton: true,
                showConfirmButton: false,
            })
            setLoading(false);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
            setLoading(false);
        }
    }

    return (
        <Container>
            <DownloadBox>
                <Loading active={loading} />
                <DownloadContainer
                    onSubmit={handleSubmit}
                >
                    <h1>Download a <span>Youtube</span> Video</h1>

                    <div className="inputContainer">
                        <div>
                            <label htmlFor="videoUrl">Video Url</label>
                            <Input
                                id="videoUrl"
                                placeholder="https://www.youtube.com/watch?v=k0PtOi..."
                                name="video_url"
                                onChange={(e: any) => {
                                    handleChangeInput(e)
                                }}
                                value={videoData.video_url}
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="convert_to">Convert To</label>
                            <Select
                                id="convert_to"
                                name="convert_to"
                                onChange={(e: any) => {
                                    handleChangeInput(e)
                                }}
                                value={videoData.convert_to}
                            >
                                <option value="mp4">Mp4</option>
                                <option value="mp3">Mp3</option>
                            </Select>
                        </div>
                    </div>

                    <Button type="submit">Download!</Button>
                </DownloadContainer>
            </DownloadBox>
        </Container>
    );
}

export default pages;