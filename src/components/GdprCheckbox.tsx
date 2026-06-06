interface Props {
  id?: string;
  name?: string;
  required?: boolean;
}

export function GdprCheckbox({ id = "gdpr-consent", name = "gdpr", required = true }: Props) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-2 text-left"
      style={{ color: "#374151", fontSize: "13px" }}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        className="mt-1"
        style={{ accentColor: "#C8A45D" }}
      />
      <span>
        I agree to my details being stored and used to contact me about Blackwood Keep services.{" "}
        <a href="/privacy" style={{ color: "#C8A45D" }}>
          View our Privacy Policy
        </a>
        .
      </span>
    </label>
  );
}
