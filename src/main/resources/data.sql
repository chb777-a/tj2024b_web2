-- ---------------------- book work ---------------------------------- --
INSERT INTO booksystem (btitle, bwriter, bcomments, bpwd) VALUES
('어떤책', '누구', '추천합니다','1234'),
('무슨책', '누구우', '추천합니다요','2345'),
('저런책', '누구우우', '추천합니다요요','3456'),
('그런책', '누구', '재미있어요','4567'),
('모르는책', '누구', '흥미진진','5678');

INSERT INTO bookreview (rtitle, rcontents, rpwd, bno) VALUES
('하이','안녕','1234','1'),
('호오','123','1234','2'),
('댜아','안녕하시오','1234','3');


-- ---------------------- web ---------------------------------- --
INSERT INTO member (mid, mpwd, mname) VALUES
('user1', 'password123', '김철수'),
('user2', 'qwerty456', '이영희'),
('user3', 'abcde789', '박민준'),
('user4', 'helloWorld', '정다은'),
('user5', 'son1234', '손흥민');


-- ---------------------- day08 ---------------------------------- --
insert into productsample( name , price , comment ) values ( '코카콜라' , 1000 , '맛있는 코카콜라' );
insert into productsample( name , price , comment ) values ( '사이다' , 1700 , '제로 사이다입니다.' );
insert into productsample( name , price , comment ) values ( '환타' , 2000 , '새로나온 환타 맛 입니다.' );
-- ---------------------- ------ ---------------------------------- --


-- ---------------------- day05 ---------------------------------- --
-- 학생 테이블 샘플 데이터 삽입
INSERT INTO student (name, kor, math) VALUES ('김철수', 90, 85);
INSERT INTO student (name, kor, math) VALUES ('이영희', 78, 92);
INSERT INTO student (name, kor, math) VALUES ('박민수', 88, 76);

-- 성적 테이블 샘플 데이터 삽입 (트랜잭션 실습을 위해 일부 데이터만 추가)
INSERT INTO student_score (sno, subject, score) VALUES (1, '국어', 90);
INSERT INTO student_score (sno, subject, score) VALUES (1, '수학', 85);
INSERT INTO student_score (sno, subject, score) VALUES (2, '국어', 78);
INSERT INTO student_score (sno, subject, score) VALUES (2, '수학', 92);

-- ---------------------- ------ ---------------------------------- --