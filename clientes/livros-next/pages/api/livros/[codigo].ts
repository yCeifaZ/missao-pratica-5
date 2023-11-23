import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from './index';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        try {
            if (!req.query.codigo) {
                throw new Error('Codigo não informado')
            }

            if (typeof req.query.codigo === 'string') {
                controleLivro.excluir(req.query.codigo);

                res.status(200).json({ message: 'Livro excluído com sucesso' });
            }


        } catch (error) {
            res.status(500).json({ message: 'Erro no servidor' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};