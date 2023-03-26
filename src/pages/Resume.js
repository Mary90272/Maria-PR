import Header from '../components/Header';
import image from './resume.png'
import pdf from './Maria_Fedorova_Resume_2.pdf'
import Footer from '../components/Footer';

const App = () => {
    return (<>
        <Header />
        <div className='resume_container'>
            <img src={image} alt="resume" />
            <a href={pdf} download={true}>Download</a>
        </div>
        <Footer />
    </>
    );
};

export default App;