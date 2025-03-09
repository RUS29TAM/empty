export default async function handler(req, res) {
    const { url } = req.query;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при запросе к VK' });
    }
}

export const videos = [
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239708&hash=15dd799d4844148e'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239729&hash=8a1e1fcc51b7b4c9'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-207121741&id=456243412&hash=758f909aa97c4ec2'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239748&hash=9e6882b2e23d98c2'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239830&hash=66e1a31329615687'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239713&hash=5de4bcf387811ce1'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239876&hash=9dbf1d44e4ce64ec'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239840&hash=8a17e3bdea37e898'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239812&hash=1de1764cb0564fb0'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239806&hash=d23f795f15dd14fc'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239924&hash=232b715bc0c6a041'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239785&hash=3a834b0d22eae857'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239749&hash=4eb881e4bac03120'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243888&hash=61c745a6ecfbd6d5'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243893&hash=384afd9bb2075daf'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243884&hash=edc2e69b9bdd71a3'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239588&hash=6d0274dab487190d'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239648&hash=6bfb9787976de6e7'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239647&hash=fdb61309c416945e'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243627&hash=ca278a31b5dfc7c4'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243620&hash=82c0c7170f95b30d'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239622&hash=8b9c7f8647e7f10f'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243466&hash=3a2ad91f4deb74c6'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-195155417&id=456240682&hash=c33ac1faa421db79'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239607&hash=a83aa095c802cd25'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239614&hash=cbd88dafc0b13413'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243383&hash=f2bb246e55d6a260'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-195155417&id=456240660&hash=60113a7828825735'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243313&hash=89700f18a6b094fc'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-32129399&id=456239559&hash=704aabb7d73fdd2a'}, // vk
    {type: 'vk', src: 'https://vk.com/video_ext.php?oid=-66711154&id=456243012&hash=3966b3e1ffd05993'}, // vk



    // {type: 'rutube', src: 'https://rutube.ru/play/embed/ed5d294983948b6dd949436297c21bb7'}, // rutube
    // {type: 'direct', src: 'https://disk.yandex.ru/ca6800d3-6b04-41be-853d-274b35ee8211'}, // Прямая ссылка

];
