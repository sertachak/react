import styles from './Card.module.css'

const card = ({product, productImage, productPrice, purchesedAt}) => {
    return(
        <div className={styles.card1}>
                <div>
                    <img className={styles.cardImage} src={productImage}/>
                </div>
                <div className={styles.information}>
                    <h3>{product}</h3>
                    <div>{productPrice}</div>
                    <div>{purchesedAt}</div>
                </div>
        </div>
    )
}

export default card;