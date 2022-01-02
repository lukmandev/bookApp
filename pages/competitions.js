import MainLayout from "../layouts/Main";


const Competitions = () => {

    return (
        <>
            <h1>Helolo World</h1>
        </>
    )
}

const WrapperCompetitions = () => {
    return (
        <MainLayout Child={Competitions} />
    )
}

export default WrapperCompetitions;