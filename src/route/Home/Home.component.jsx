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
import { collection,query,getDocs ,getFirestore} from 'firebase/firestore';
const Home = ()=>{
    const dispatch =useDispatch();
    const userName = useSelector(selectUserName);
    let recommends=[];
    let newDisneys =[];
    let originals = [];
    let trending = [];
    useEffect(()=>{
        const handlefunc=(data)=>{
            switch (data){
                case "recommend":recommends.push({id:data.id ,...data.data()});
                break;
                case "new":newDisneys.push({id:data.id, ...data.data()});
                break;
                case "original":originals.push({id:data.id, ...data.data()});
                break;
                case "trending":trending.push({id:data.id, ...data.data()});
                break;
                default:console.log("booo")
                }
        }
        const db =getFirestore();
        const getCollectionAndDocuments = async()=>{
            const collectionRef = collection(db,"movies");
            const q = query(collectionRef);
            const querySnapshot = await getDocs(q)
            .then(()=>{
            querySnapshot.docs.map((docSnapshot)=>handlefunc(docSnapshot.data().type))
            }).then(()=>{
               console.log(recommends) 
            })
        
    }
    dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
      getCollectionAndDocuments()
      console.log(recommends)
      
},[userName])

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