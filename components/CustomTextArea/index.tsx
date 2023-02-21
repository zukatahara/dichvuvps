import styles from '@/styles/CustomTextArea/index.module.scss'
import { CSSProperties } from 'react'

const CustomTextArea = (props: {placeholder: string, style?:CSSProperties, setValue?: ()=>void}) => {
    return (
        <textarea placeholder={props.placeholder} className = {styles.customTextArea} style={props.style} />
    )
}

export default CustomTextArea