import styles from '@/styles/CustomTextInput/index.module.scss'
import { CSSProperties } from 'react'

const CustomTextInput = (props: {placeholder: string, setValue?: ()=>void, style?: CSSProperties}) => {
    return (
        <input className = {styles.customTextInput} placeholder={props.placeholder} style={props.style}/>
    )
}

export default CustomTextInput