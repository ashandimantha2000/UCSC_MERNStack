import styled from "styled-components";

const Card = styled.div`
    background-color: blue;
    border: 1px solid #ccc;
    padding: 16px;
    margin: 50px;
    color: black;
`;

const RoundedCard = styled(Card)`
    border-radius: 20px;
    color: white;
`;

function Nesting() {
    return (
        <div>
            <Card>
                kbk 
            </Card>
            <RoundedCard>
                words
            </RoundedCard>
        </div>
    );
}

export default Nesting;
