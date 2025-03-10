import img1 from '../../../assets/collections/28_DZGrowU.jpg';
import img2 from '../../../assets/collections/acne_studios.jpg';
import img3 from '../../../assets/collections/aime_leon_dore (1).jpg';
import img4 from '../../../assets/collections/aime_leon_dore.jpg';
import img5 from '../../../assets/collections/air_jordans.jpg';
import img6 from '../../../assets/collections/alpgaomegacirlce.png';
import img7 from '../../../assets/collections/bagpacks.jpg';
import img8 from '../../../assets/collections/bags.jpg';
import img9 from '../../../assets/collections/bape.jpg';
import img10 from '../../../assets/collections/beanies.jpg';
import img11 from '../../../assets/collections/belts.jpg';
import img12 from '../../../assets/collections/billionaire_boys.jpg';
import img13 from '../../../assets/collections/drip-project.jpg';
import img14 from '../../../assets/collections/for_her_icon.jpg';
import img15 from '../../../assets/collections/henney_bear_icon.jpg';
import img16 from '../../../assets/collections/new_circle_icons.png';
import img17 from '../../../assets/collections/thekhwaab.jpg';
import img18 from '../../../assets/collections/zouk_icon.jpg';

const Collections = () => {
    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];
    return (
        <div className='p-5 flex justify-center gap-2'>
            {
                imgs.map((img, index) => <img key={index} className='size-24 rounded-full' src={img} alt="" />)
            }
        </div>
    );
};

export default Collections;