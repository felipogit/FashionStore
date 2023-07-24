import { StyledTopSectionAdmin } from "./styles";

interface ITopSectionAdmin {
  title: string;
  message: string;
}

export const TopSectionAdmin = ({title, message}:ITopSectionAdmin) => {
  return (
    <StyledTopSectionAdmin>
        <h2>{title}</h2>
        <p>{message}</p>
    </StyledTopSectionAdmin>
  )
}