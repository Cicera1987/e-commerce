import Header from "../../header";
import useProducts from "../../hooks/useProducts";
import "./styles.css";
import imgIcon from "../../assets/image/img-icon.png"
import { MouseEvent, useRef } from "react";
import Delete from "../../assets/icons/delete";
import Edit from "../../assets/icons/edit";

function Home() {
    const { product, handleDelete, navigate } = useProducts();

    const carousel = useRef<HTMLDivElement | null>(null);

    const handleLeftClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    };

    const handleRightClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    };

    return (
        <>
            <Header title="Início" />
            <div className="container-carousel">
                <div className="container">
                    <div className="carousel" ref={carousel}>
                        {product.map((item) => (
                            <div key={item.id}>
                                <div className="item">
                                    <div className="image" >
                                        <img src={item.photo_url} alt={item.name} />
                                    </div>
                                    <div className="info">
                                        <span className="name">{item.name}</span>
                                        <span className="description">{item.description}</span>
                                        <span className="price">R$ {item.price.toFixed(2)}</span>
                                    </div>
                                    <div className="buttons-icons">
                                        <button className="icon-button" onClick={() =>handleDelete(item.id)}><Delete /> </button>
                                        <button className="icon-button" onClick={() => navigate(`/products/${item.id}/edit`)}><Edit /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="buttons">
                        <button
                        onClick={handleLeftClick}
                        >
                            <img 
                                src={imgIcon}
                                alt="scroll Left"
                             />
                            </button>
                        <button
                            onClick={handleRightClick}
                        >
                            <img 
                                src={imgIcon} 
                            alt="scroll Right" />
                            </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
