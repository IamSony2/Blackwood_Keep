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
      style={{ color: "var(--muted-foreground)", fontSize: "13px" }}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        className="mt-1"
        style={{ accentColor: "var(--color-bk-gold)" }}
      />
      <span>
        I agree to my details being stored and used to contact me about Blackwood Keep services.{" "}
        <a href="/privacy" style={{ color: "var(--color-bk-gold)" }}>
          View our Privacy Policy
        </a>
        .
      </span>
    </label>
  );
}
