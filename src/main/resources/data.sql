
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