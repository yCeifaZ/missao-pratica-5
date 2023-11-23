import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './index';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const codEditora = Number(req.query.codEditora); 

      if (isNaN(codEditora)) {
        res.status(400).json({ message: 'Código de editora inválido' }); 
        return;
      }

      const nomeEditora = await controleEditora.getNomeEditora(codEditora); 

      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora }); 
      } else {
        res.status(404).json({ message: 'Editora não encontrada' }); 
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' }); 
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};