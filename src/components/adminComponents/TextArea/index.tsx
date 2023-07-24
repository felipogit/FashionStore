import { TextareaHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form";
import { StyledTextArea, TextAreaContainer } from "./styles.ts";

interface ITextAreaProps extends TextareaHTMLAttributes <HTMLTextAreaElement> {
  placeholder: string;
  error?: FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(({ placeholder, error, ...rest}, ref) => {
  return (
    <TextAreaContainer>
      <StyledTextArea ref={ref} placeholder={placeholder} {...rest}/>
      {error? <p>{error.message}</p> : null}
    </TextAreaContainer>
  )
})