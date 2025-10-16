import styled, { css } from "styled-components";
import { Link } from "react-router-dom"
import { useAppNavigate } from "../hooks/useAppNavigate";


const name = {
    login: css`
     padding: 10px 3rem 10px 3rem;
    `,
    tracking: css`
     padding: 14px 2.25rem 14px 2.25rem;
    `,
    back: css`
      border: solid 1px var(--black);
      padding: 6px 1.75rem 6px 1.75rem;
      border-radius: 2rem;
      font-size: 14px;
     `,
    add: css`
           padding: 6px 2rem 6px 2rem;
           font-size: 14px;
           background: var(--black);
           color: var(--green);
     `,
    arrow: css`
      display: flex;
      justify-content: end;
      transform: translateY(-0.5rem);
      `,

}

const Button = styled.button`
 border-radius: 3rem;
${(props) => name[props.name]}
${(props) => props.primary === 'primary' && css`
 background: var(--green);
     &:hover {
     background: #80ff67eb;
     }
    color: var(--black);
 
    user-select: none;
`}
`;

const LinkButton = ({ children, name, to, primary }) => {
    const navigate = useAppNavigate()
    if (to === '-1') return (
        <Button name={name} to={to} onClick={(e) => {
            e.preventDefault();
            navigate(-1)
        }}>
            {children}
        </Button>
    );
    return (
        <Link to={to}>
            <Button primary={primary} name={name}>{children}</Button>
        </Link>
    )
}

export { LinkButton, Button }