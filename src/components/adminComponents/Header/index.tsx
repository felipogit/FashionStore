interface IHeader {
  title: string;
  message: string;
}

export const Header = ({title, message}:IHeader) => {
  return (
    <header>
        <h2>{title}</h2>
        <p>{message}</p>
    </header>
  )
}