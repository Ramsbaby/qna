-- 상담사 등록
-- insert into users (id, name, password, role, created_at, updated_at) values ('ramsbaby', '이정우', 'test1234', 'C', now(), now());



-- 상담글 등록
insert into inquerys (user_id, title, content, counselor_id, is_answered, created_at, updated_at) values ('ramsbaby', 'TESTTITLE1', 'TESTCONTENT1', null, 'N', now()-2, now());
insert into inquerys (user_id, title, content, counselor_id, is_answered, created_at, updated_at) values ('ramsbaby', 'TESTTITLE2', 'TESTCONTENT2', null, 'N', now()-1, now());
insert into inquerys (user_id, title, content, counselor_id, is_answered, created_at, updated_at) values ('ramsbaby', 'TESTTITLE3', 'TESTCONTENT3', null, 'N', now(), now());
