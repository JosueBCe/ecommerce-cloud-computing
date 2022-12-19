import { Amplify, withSSRContext } from "aws-amplify";


export default async function (req, res) {
    const {Auth} = withSSRContext({ req }); 
    try {
        const user = await Auth.currentAuthenticatedUser()

        res.json({
            user: user.username,
            userId: user.attributes.email
        })
    } catch (err) {
        res.statusCode = 401;
        res.json({ user: null }); 
    }
}
