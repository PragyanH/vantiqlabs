-- A user owns at most one student profile and can create it only after authentication.
alter table students add constraint students_auth_user_id_key unique (auth_user_id);

create policy "Students insert own row"
  on students for insert
  with check (auth_user_id = auth.uid());
