import Admin from '../db/models/Admin';

interface UpdateAdminsBody {
  ids: string[];
  data: (typeof Admin)[];
}

export { UpdateAdminsBody };
