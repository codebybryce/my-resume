
import DATA from '../../data.json'
export default function handler(req, res) {
  res.status(200).json(DATA)
}
