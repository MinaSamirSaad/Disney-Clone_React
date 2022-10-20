import { DropDown,SignOut } from "./Logout.styles"

const Logout =({onClick,children})=>{
    return(
    <SignOut onClick={onClick}>
        {children}
        <DropDown>
            <span>Sign out</span>
        </DropDown>
    </SignOut>
    )
}
export default Logout