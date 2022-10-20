import { useParams } from "react-router-dom"
import db from "../../utils/Firebase";
import { useEffect, useState } from "react";
import {Container,Background,ImageTitle,ContentMeta,Controls,Player,Trailer,AddList,GroupWatch,SubTitle,Description} from "./Detail.styles"
import { doc,getDoc } from "firebase/firestore";
import groupIcon from "../../assets/images/group-icon.png";
import whiteIcon from "../../assets/images/play-icon-white.png"
import blackIcon from "../../assets/images/play-icon-black.png"
const Detail =()=>{
    const {id}=useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
    const getDetailOfMovie=async()=>{
    const userDocRef = doc(db, "movies",id);
    const userSnapshot = await getDoc(userDocRef);
    if(userSnapshot){
    setDetailData(userSnapshot.data())
    } else {
        console.log("no such document in firebase 🔥");
      }
        }
        getDetailOfMovie()
}, [id]);
    
    return (
        <Container>
          <Background>
            <img alt={detailData.title} src={detailData.backgroundImg} />
          </Background>
    
          <ImageTitle>
            <img alt={detailData.title} src={detailData.titleImg} />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src={blackIcon} alt="" />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src={whiteIcon} alt="" />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src={groupIcon} alt="" />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
          </ContentMeta>
        </Container>
      );
    
}
export default Detail