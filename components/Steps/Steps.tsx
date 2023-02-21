import styles from '@/styles/Steps/steps.module.css'


const Steps = (props: any) => {
    return <div style={{ display: 'flex', flexFlow: props.position === 'left' ? 'row-reverse' : '', marginTop: '5rem' }}>
        <img src={props.image} style={{ width: '100%', maxWidth: '20%', height: '18%' }} />
        {props.position === 'right' &&
            <div className={styles.steps} style={props.position === 'left' ? { flexFlow: 'row-reverse', left: 0 } : {}}>
                <p className={styles.numbers}>{props.number}</p>
                <p className={styles.content}>{props.content}</p>
            </div>
        }
        {props.position === 'left' &&
            <div className={styles.steps_left} style={props.position === 'left' ? { flexFlow: 'row-reverse', left: 0 } : {}}>
                <p className={styles.numbers}>{props.number}</p>
                <p className={styles.content}>{props.content}</p>
            </div>
        }
    </div >
}
export default Steps;