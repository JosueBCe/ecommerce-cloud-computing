import { withSSRContext } from "aws-amplify"

function Protected({authenticated, username}) {
    if(!authenticated){
        return (
         <div>
            <h2>Not Authenticated</h2>
        </div>
        )
    } else {
    return (
        <div>
        <h2>You have private Access {username}</h2>
    </div>
    )
}

}


export async function getServerSideProps(context){
    const {Auth} = withSSRContext(context)
    try {
        const user = await Auth.currentAuthenticatedUser()
        return {
            props: {
                authenticated: true,
                username: user.username
            }
        }
    } catch(err){
        console.log(err)
        return {
            props: {
                authenticated: false
            }
        }
    }
}

export default Protected 