import React from "react"
import styled from "styled-components"
import * as EmailValidator from 'email-validator';

export default class ContactForm extends React.Component {
    constructor() {
        super()
        
        this.state = {
            loading: false,
            submitted: false,
            errors: {}
        }

        this.inputs = {}
    }
    render() {
        const { submitted } = this.state

        return (
            <Form action="/contact" method="post" >
                { submitted 
                    ? this._renderSubmittedForm() 
                    : this._renderUnsubmittedForm() 
                }
            </Form>
        )
    }
    _renderInput = (input) => {
        const { name, type } = input
        const errorMessage = this.state.errors[name.toLowerCase()]
        const InputComponent = type === "input" || type === "email"
            ? Input 
            : TextArea

        return (
            <Field
                key={ name }
                error={ errorMessage }
                onChange={ this._removeError.bind(this, name.toLowerCase()) }
            >

                <Label htmlFor={ name.toLowerCase() }>
                    <InputComponent
                        innerRef={ this._setInput(name.toLowerCase()) }
                        name={ name.toLowerCase() }
                        placeholder={ errorMessage || name }
                        type={ type } />
                </Label>
                
            </Field>
        )
    }
    _renderUnsubmittedForm = () => {
        const inputs = [{ name: "Name", type: "input" }, { name: "Email", type: "email" }, { name: "Message", type: "textArea" }]
        const InputComponents = inputs.map(this._renderInput)

        return (
            <div>
                { InputComponents }

                <SubmitButton onClick={ this._handleSubmit }>
                    <SubmitIcon />
                </SubmitButton>
            </div>
        )
    }
    _renderSubmittedForm = () => {
        return (
            <ThankYouMessage style={{ textAlign: "center" }}>
                Thank you for your message! 
                <br />
                I will get back with you shortly!
            </ThankYouMessage>
        )
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {}
        const errors = {}

        for (const field in this.inputs) {
            data[field] = this.inputs[field].value
        }

        console.log("FORM DATA:", data)

        errors.name = data.name.trim() === "" && "Please enter your name"
        errors.email = data.email.trim() === "" 
            ? "Please enter your email address"
            : !EmailValidator.validate(data.email)
                ? "Please enter a valid email address"
                : "" 
        errors.message = data.message.trim() === "" && "Please enter a message"

        const hasError = Object.keys(errors).find(error => errors[error])
        
        if (hasError) {
            console.log("Errors:", errors, hasError)
            this.setState({ errors })
        } else {
            this.setState({ loading: true, errors: {} })

            fetch("https://cors-anywhere.herokuapp.com/gabe-west-portfolio.herokuapp.com/contact", {
                method: "POST", 
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                mode: "cors",
                cache: "default"
            }).then(res => {
                console.log("Request complete! response:", res)

                this.setState({ loading: false })                

                if (res.ok) {
                    this.setState({ submitted: true })
                }
            }).catch(err => {
                console.log("Error submitting form:", err)
                this.setState({ errors: { submit: "An error occured when trying to process your Email :(" }})
            })
        }
    }
    _removeError = (name) => {
        const { errors } = this.state

        if (errors[name] !== "") {
            errors[name] = ""

            this.setState({ errors })
        }
    }
    _setInput = (name) => (input) => {
        this.inputs[name] = input
    }
}

const INPUT_STYLES = `
    box-sizing: border-box;
    border-radius: 5px;
    height: 30px;
    margin-bottom: 24px;
    padding: 8px;
`

const ThankYouMessage = styled.h1`
    @media (max-width: 767px) {
        font-size: 24px;
    }
`
const Container = styled.div`
    position: relative;
    padding-bottom: 20px;
    padding-top: 0;

    @media (min-width: 768px) {
        padding-bottom: 40px;
    }
`
const Padding = styled.div`
    padding: 20px 0;

    @media (min-width: 768px) {
        padding-top: 30px;
        padding-bottom: 20px;
    }
`
const Text = styled.p``
const Title = styled.h3`
    font-size: 28px;
    margin: 0;
    font-weight: 500;
    line-height: 12vmax;
    letter-spacing: 6px;
    text-align: center;
`
const Input = styled.input`
    ${ INPUT_STYLES }
`
const TextArea = styled.textarea`
    ${ INPUT_STYLES }
    height: 120px;
`
const Label = styled.label`
    width: 100%;
`
const SubmitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 512 512">
        <path d="M104.837 294.974l-87.562-42.957 477.45-133.694z" fill={ "#efefef" }/>
        <path d="M494.725 118.323l-354.918 187.812 17.531 87.542 63.13-51.528-31.293-13.742z" fill={ "#efefef" }/>
        <path d="M326.154 372.705l-106.865-47.084 274.985-206.756z" fill={ "#efefef" }/>
    </svg>
)
const SubmitButton = styled.button`
    border-left: solid thin black;
    border-top: solid thin black;
    border-right: solid thin #efefef;
    border-bottom: solid thin #efefef;
    border-radius: 5px;
    outline: none;

    &:active {
        border-left: solid thin #efefef;
        border-top: solid thin #efefef;
        border-right: solid thin black;
        border-bottom: solid thin black;

        * {
            position: relative;
            top: 2px;
            left: 2px;
        }
    }
`
const Field = styled.div`
    display: flex;
    justify-content: space-between;
    ${({ error }) => {
        if (error) {
            return `
                input, textarea {
                    border: solid thin red;

                    ::placeholder {
                        color: red;
                        opacity: 1;
                    }
                    
                    :-ms-input-placeholder {
                        color: red;
                    }
                    
                    ::-ms-input-placeholder {
                        color: red;
                    }
                }
            `
        }
    }}
`
const Form = styled.form`
    border-radius: 5px;
    width: 100%;
`
