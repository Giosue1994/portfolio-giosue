import classes from "./Input.module.scss";

export default function Input({ textarea, error, ...props }) {
  return (
    <div className={classes["form-group"]}>
      {textarea ? (
        <textarea {...props} required />
      ) : (
        <input {...props} required />
      )}
      <div className={classes["control-error"]}>{error && <p>{error}</p>}</div>
    </div>
  );
}
