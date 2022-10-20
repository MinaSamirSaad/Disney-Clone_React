import ImgSlider from '../../components/imgSlider/ImgSlider.component';
import NewDisney from '../../components/NewDisney/NewDisney.component';
import Originals from '../../components/Originals/Originals.component';
import Recommends from '../../components/Recommends/Recommends.component';
import Trending from '../../components/Trending/Trending.component';
import Viewers from '../../components/Viewers/Viewers.component';
import { Container } from './Home.styles';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setMovies } from '../../features/Movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';
import { getFirestore,collection,query,getDocs } from 'firebase/firestore';
const Home = ()=>{
    const dispatch =useDispatch();
    const userName = useSelector(selectUserName);
    let recommends=[];
    let newDisneys =[];
    let originals = [];
    let trending = [];
    useEffect(() => {
        const bigFun = async()=>{
        const getCollectionAndDocuments = async()=>{
            const db =getFirestore();
            const collectionRef =  collection(db,"movies");
            const q =  query(collectionRef);
            const querySnapshot = await getDocs(q)
            return querySnapshot.docs.map((doc)=>{
                switch (doc.data().type) {
                    case "recommend":
                      recommends = [...recommends, { id: doc.id, ...doc.data() }];
                      console.log(recommends)
                      break;
          
                    case "new":
                      newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                      break;
          
                    case "original":
                      originals = [...originals, { id: doc.id, ...doc.data() }];
                      break;
          
                    case "trending":
                      trending = [...trending, { id: doc.id, ...doc.data() }];
                      break;
                      default:console.log("mmm")
                  }
                })
            
        }
        await getCollectionAndDocuments()
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );}
          bigFun()
      }, [userName]);
      console.log(recommends)
    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    )
}

export default Home