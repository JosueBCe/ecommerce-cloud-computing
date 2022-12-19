import { withSSRContext } from "aws-amplify"
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
  } from '@aws-amplify/ui-react';
  

function Protected({authenticated, username}) {
    if(!authenticated){
        return (
         <div>
            <h2>Not Authenticated</h2>
        </div>
        )
    } else {
    return (
        <Table
        caption={"This is a caption for the table component"}
        highlightOnHover={true}

    >
        <TableHead>
            <TableRow>
                <TableCell as="th">Citrus</TableCell>
                <TableCell as="th">Stone Fruit</TableCell>
                <TableCell as="th">Berry</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Orange</TableCell>
                <TableCell>Nectarine</TableCell>
                <TableCell>Raspberry</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Grapefruit</TableCell>
                <TableCell>Apricot</TableCell>
                <TableCell>Blueberry</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Lime</TableCell>
                <TableCell>Peach</TableCell>
                <TableCell>Strawberry</TableCell>
            </TableRow>
        </TableBody>
    </Table>
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
                username: user.username,
  
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