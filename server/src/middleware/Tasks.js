    // Check if body content have a title
    export const checkBody = (req, res, next) => {
        const { title } = req.body;

        if (!title) {
            res.status(400).json({ message: 'The title cannot be blank' });
        }

        next();
    }