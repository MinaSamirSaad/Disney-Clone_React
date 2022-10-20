import { Container, Wrap } from "./Viewers.styles";
import disneyPhoto from "../../assets/images/viewers-disney.png";
import disneyVideo from "../../assets/videos/1564674844-disney.mp4"
import pixarPhoto from "../../assets/images/viewers-pixar.png";
import pixarVideo from "../../assets/videos/1564676714-pixar.mp4"
import marvelPhoto from "../../assets/images/viewers-marvel.png";
import marvelVideo from "../../assets/videos/1564676115-marvel.mp4"
import starwarsPhoto from "../../assets/images/viewers-starwars.png";
import starwarsVideo from "../../assets/videos/1608229455-star-wars.mp4"
import nationalPhoto from "../../assets/images/viewers-national.png";
import nationalVideo from "../../assets/videos/1564676296-national-geographic.mp4"
import { useEffect ,useRef} from "react";





const Viewers = () => {
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);

    return (
        <Container>
            <Wrap>
                <img src={disneyPhoto} alt="" />
                <video ref={ vidRef } autoPlay={true} loop={true} playsInline={true}>
                    <source src={disneyVideo} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={pixarPhoto} alt="" />
                <video ref={ vidRef } autoPlay={true} loop={true} playsInline={true}>
                    <source src={pixarVideo} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={marvelPhoto} alt="" />
                <video ref={ vidRef } autoPlay={true} loop={true} playsInline={true}>
                    <source src={marvelVideo} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={starwarsPhoto} alt="" />
                <video ref={ vidRef } autoPlay={true} loop={true} playsInline={true}>
                    <source src={starwarsVideo} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={nationalPhoto} alt="" />
                <video ref={ vidRef } autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src={nationalVideo}
                        type="video/mp4"
                    />
                </video>
            </Wrap>
        </Container>
    );
};
export default Viewers;
