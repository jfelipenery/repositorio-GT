import './card.css'
import carro from '../assets/opala.jpg'


function Card (){
    return (

        <>
<section className='card'>
    <img src={carro} alt="imagem" />
    
    <h3>cartão 1</h3>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, optio magnam cumque quos, ad soluta cum eos delectus inventore expedita dignissimos reiciendis maiores quia, quasi cupiditate molestias debitis dolores laboriosam?</p>

        <button>Clique aqui</button>

    </div>

</section>



<section className='card'>

<img src={carro} alt="imagem" />
    <h3>cartão 2</h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, optio magnam cumque quos, ad soluta cum eos delectus inventore expedita dignissimos reiciendis maiores quia, quasi cupiditate molestias debitis dolores laboriosam?

        <button>Clique aqui</button>

    </div>

</section>

<section className='card'>

<img src={carro} alt="imagem" />
    <h3>cartão 3</h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, optio magnam cumque quos, ad soluta cum eos delectus inventore expedita dignissimos reiciendis maiores quia, quasi cupiditate molestias debitis dolores laboriosam?

        <button>Clique aqui</button>

    </div>

</section>
</>
    );
}


export default Card
    
