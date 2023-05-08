import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';

interface UpdateProfileData {
  username: string;
  password: string;
}

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'entities/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    // внутри компонентов для получения стейта мы исп хук useSelector, а внутри санок getState()
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
