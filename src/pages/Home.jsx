import Card from "../componentes/Card"



function Home(){
    return (
        <>
            <div className="relative w-full top-14  flex justify-around">
   
                <Card titulo="FALHAS" quantidade="50"/>
                <Card titulo="FALHAS" quantidade="50"/>
                <Card titulo="FALHAS" quantidade="50"/>
            </div>
        </>
    )
}

export default Home