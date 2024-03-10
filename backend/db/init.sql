-- 创建武将表
CREATE TABLE generals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    strength INTEGER NOT NULL,
    intelligence INTEGER NOT NULL,
    speed INTEGER NOT NULL
);

-- 创建战法表
CREATE TABLE tactics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    effect TEXT NOT NULL
);

-- 插入初始武将数据
INSERT INTO generals (name, strength, intelligence, speed) VALUES 
('刘备', 75, 88, 80),
('关羽', 92, 85, 89),
('张飞', 95, 70, 85);

-- 插入初始战法数据
INSERT INTO tactics (name, effect) VALUES 
('连环计', '使敌人陷入混乱，降低其攻击力'),
('火攻', '对敌人造成大量伤害');
