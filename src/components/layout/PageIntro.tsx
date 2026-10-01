type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="an-page-intro">
      <p className="an-eyebrow">{eyebrow}</p>
      <h1 className="an-display an-page-intro__title">{title}</h1>
      <p className="an-prose an-page-intro__description">{description}</p>
    </header>
  );
}
