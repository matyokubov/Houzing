import styled from "styled-components"
import { ReactComponent as pin } from "./icons/pin.svg"
import { ReactComponent as phone } from "./icons/phone.svg"
import { ReactComponent as email } from "./icons/email.svg"
import { ReactComponent as facebook } from "./icons/facebook.svg"
import { ReactComponent as twitter } from "./icons/twitter.svg"
import { ReactComponent as instagram } from "./icons/instagram.svg"
import { ReactComponent as linkedin } from "./icons/linkedin.svg"
import { ReactComponent as logo } from "./icons/logo.svg"
import { ReactComponent as up } from "./icons/up.svg"

export const Container = styled.div`
    padding-top: 30px;
    background: #0D263B;
    color: #fff;
    width: 100%;
    display: inline-flex;
    >div{
        width: 100%;
    }
    .cols{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        .col{
            display: inline-flex;
            flex-direction: column;
            row-gap: 20px;
            margin-right: 3rem;
            margin-bottom: 2rem;
            >.item{
                display: flex;
                column-gap: 21px;
            }
            .social{
                width: 169px;
                display: inline-flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    .fend{
        padding: 16px 0;
        padding-left: 16px;
        margin-top: 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        .toCenter{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 12px;
            >.copyr{
                display: inline-flex;
                align-items: center;
                column-gap: 73px;
                .up{
                    display: inline-flex;
                    align-items: center;
                    padding: 22px 20px;
                    background-color: #0061df;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
    }
    h3{
        color: #fff;
    }
`

export const PinIcon = styled(pin)``
export const PhoneIcon = styled(phone)``
export const EmailIcon = styled(email)``
export const FacebookIcon = styled(facebook)``
export const TwitterIcon = styled(twitter)``
export const InstagramIcon = styled(instagram)``
export const LinkedinIcon = styled(linkedin)``
export const Logo = styled(logo)``
export const ToUp = styled(up)``
