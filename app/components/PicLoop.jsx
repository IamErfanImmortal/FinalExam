import Figure from "./Figure";
import Article from "./Article";


export default function PicLoop({pics}) {

    return (

        <div className="featurecards">
                
                    
                        {pics.map((item, index) => {
                        return <li key={index}>
                            
                                        <Figure image={item.url} desc={item.altt} caption={item.title}>
                                        </Figure>
                                    
                        </li>
                    })}   
                    
                
            </div>
    );
}