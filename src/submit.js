import dbConnect from '../../utils/dbConnect.js'

export default async function submitHandler(req, res){
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const {Afirst, Alast, email, username, password, confirmPassword} = req.body;

    if (password !== confirmPassword) {
        res.status(400).json({ message: 'Passwords do not match' });
        return;
    }


    try {
        const query = 'INSERT INTO Artist (Afirst, Alast, Ausername, Aemail, password, confirm_password) VALUES (@Afirst, @Alast, @email, @username, @password, @confirm_password) '
        const params = [
            {name: "Afirst", type: sql.Varchar, value: Afirst},
            {name: "Alast", type: sql.Varchar, value: Alast},
            {name: "Ausername", type: sql.Varchar, value: username},
            {name: "Aemail", type: sql.Varchar, value: email},
            {name: "password", type: sql.Varchar, value: password},
            {name: "confirm_password", type: sql.Varchar, value: confirmPassword}
        ];

        await dbConnect(query, params);
        res.status(200).json({ message: 'Form submitted successfully' });

    } catch(error) {
        console.log('Did not submit')
        console.error('Database connection error', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}
