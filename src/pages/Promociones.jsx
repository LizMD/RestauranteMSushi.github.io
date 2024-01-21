    import { PromocionesPorId } from "./PromocionesPorId"
    
    const promocionesSushi = [
    {
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/Dhe8K6yqxKxkkAApQ-350-350.webp',
        nombre: 'Promo de 40 Piezas',
        numero: 40,
        descripción: '40 piezas de tempura',
        precio: 15000

    },
    {
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/vKtHXQYnkwafGWrch-350-350.webp',
        nombre: 'Promo de 50 Piezas',
        numero: 50,
        descripción: '50 piezas mixtas',
        precio: 20000

    },
    {
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/8WHXbSRMZWoW5Mpm5-350-350.webp',
        nombre: 'Promo de 60 Piezas',
        numero: 60,
        descripción: '60 piezas mixtas',
        precio: 25000

    },
    {
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/CdWqhXRJyomNzt3sA-350-350.webp',
        nombre: 'Promo de 80 Piezas',
        numero: 80,
        descripción: '80 piezas mixtas',
        precio: 35000

    }
]

export function Promociones () {


    return (
        <>
        <div>
            {
                promocionesSushi.map((promocion, index)=>{
                    return (<PromocionesPorId key={index} promocion={promocion} />)
                })
            }
        </div>
        </>
    )
}
