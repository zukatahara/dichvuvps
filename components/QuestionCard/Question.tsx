import styles from "@/styles/Question/question.module.css";

const Question = (props: any) => {
  return (
    <div className={styles.question_collapse}>
      <details>
        <p className={styles.content}>{props.content}</p>
        <summary>
          <img src="/images/edit-2.svg" />
          <span className={styles.question_title}>{props.title}</span>
        </summary>
      </details>
    </div>
  );
};
export default Question;
