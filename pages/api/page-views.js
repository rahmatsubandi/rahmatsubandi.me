import db from '../../scripts/db-admin'

export default (req, res) => {
    if (!req.query.id) {
        return db.ref('views').once('value', (snapshot) => {
            const views = snapshot.val()
            const allViews = Object.values(views).reduce(
                (total, value) => total + value
            )
        })
    }

    const ref = db.ref('views').child(req.query.id)

    return ref.once('value', (snapshot) => {
        res.status(200).json({
            total: snapshot.val()
        })
    })
}