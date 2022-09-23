import { useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { toggleCards, calculatePoints } from '../redux/memoryCardsSlice'
import { Row, Col, Card } from 'react-bootstrap'

function CardList() {
    const dispatch = useDispatch();
    //states
    const [previousSelection, setPreviousSelection] = useState(null);
    const [isClickable, setIsClickable] = useState(true)
    let points = useSelector((state) => state.memoryCards.points);
    const cards = useSelector((state) => state.memoryCards.items);
    // console.log("cardlistpoints", points)
    // console.log("previousSelection", previousSelection)
    // console.log("cards", cards)

    const handleToggleCards = (card) => {
        const pairOfCard = cards.find((pairedCard) => pairedCard.pairedCardId === card.id);
        if ((card.isOpen && pairOfCard.isOpen) || card.id === previousSelection) {
            return
        }
        if (previousSelection === null) {
            dispatch(toggleCards({ id: card.id }))
            setPreviousSelection(card.id)
        }
        else {
            dispatch(toggleCards({ id: card.id }))
            setIsClickable(false)
            setTimeout(() => {
                console.log("pairOfCard.isOpen", pairOfCard.isOpen)
                console.log("card.isOpen", card.isOpen)
                if (!pairOfCard.isOpen) {
                    dispatch(toggleCards({ id: card.id }))
                    dispatch(toggleCards({ id: previousSelection }))
                    dispatch(calculatePoints({ points: points - 10 }))
                } else {
                    dispatch(calculatePoints({ points: points + 50 }))
                }

                setPreviousSelection(null)
                setIsClickable(true)
            }, 0.5 * 1000);
        }
    }

    return (
        <>
            <Row xs={2} md={4} className="g-1 memoryCards mb-3 justify-content-center">
                {cards.map((card) => (
                    <Col key={card.id} className='flip-card'>
                        <Card className={`position-relative flip-card-inner ${card.isOpen ? 'active' : 'notActive'}`}>
                            <div className={`flip-card-front `}>
                                <Card.Img variant="top" src={'/Images/png/questionmark.png'} className='mx-auto mt-2' />
                                <Card.Body className='p-1 '>
                                    <div className={`cardFlipper stretched-link`} name={`${card.id}`} onClick={isClickable ? () => handleToggleCards(card) : undefined}>
                                        <Card.Title className="memoryCardsTitle ">Click To Flip</Card.Title>
                                    </div>
                                </Card.Body>
                            </div>
                            <div className={`flip-card-back `}>
                                <Card.Img variant="top" src={card.imageUrl} className='mx-auto mt-2' />
                                <Card.Body className='p-1'>
                                    <div className={`cardFlipper stretched-link`} name={`${card.id}`}
                                        onClick={isClickable ? () => handleToggleCards(card) : undefined}>
                                        <Card.Title className="memoryCardsTitle ">{card.name}</Card.Title>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))
                }
            </Row >
        </>
    )
}

export default CardList