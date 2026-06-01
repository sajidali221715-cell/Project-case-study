type SectionTextProps = {
  eyebrow: string;
  title: string;
  body?: string;
  rule?: boolean;
};

export default function SectionText({ eyebrow, title, body, rule = true }: SectionTextProps) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-title">{title}</h2>
      {rule ? <div className="blue-rule" /> : null}
      {body ? <p className="body-copy">{body}</p> : null}
    </div>
  );
}
