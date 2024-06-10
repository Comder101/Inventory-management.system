from moviepy.editor import VideoFileClip

def convert_mp4_to_mp4(input_video_path, output_video_path):
    clip = VideoFileClip(input_video_path)
    clip.write_videofile(output_video_path, codec='libx264')

input_video_path = 'media/void_detect/test.mp4'
output_video_path = 'media/void_detect/test.mp4'

convert_mp4_to_mp4(input_video_path, output_video_path)
