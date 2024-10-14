import React from 'react';
import { Carousel } from 'react-bootstrap';

export const MatchMakingGuide = () => {
    return (
        <div className="container mx-auto my-5 ">
            <div className="relative ">
                <Carousel
                    indicators={false}
                    controls={true}
                    interval={null}
                    prevIcon={
                        <span
                            className="carousel-control-prev-icon bg-black rounded-full w-5 h-10 flex items-center justify-center"
                            aria-hidden="true"
                        >
                            &#10094;
                        </span>
                    }
                    nextIcon={
                        <span
                            className="carousel-control-next-icon bg-black rounded-full w-5 h-10 flex items-center justify-center"
                            aria-hidden="true"
                        >
                            &#10095;
                        </span>
                    }
                >
                    {/* Slide 1 */}
                    <Carousel.Item>
                        <div className="flex flex-col items-center px-2 max-h-[70vh] md:max-h-full overflow-y-scroll md:overflow-visible">
                            <h2 className="font-bold text-lg mb-3 text-pink-600">Online Match-Making Guide</h2>
                            <div className='px-3 text-md justify-center'>
                                <p className="text-start">
                                    <strong>1. Choosing the Platform :</strong><br />
                                    <br />Research: Explore reputable online match-making platforms that align with your values
                                    and preferences (e.g., general dating sites, niche-specific platforms).Safety: Prioritize
                                    platforms that prioritize user safety with features like verification processes and privacy
                                    settings..<br /><br />

                                    <strong>2. Creating a Profile :</strong>  <br /><br />
                                    Authenticity: Craft a genuine profile that reflects your personality, interests, and relationship
                                    goals.Quality Photos: Use clear and recent photos that accurately represent yourself.
                                    <br /><br />

                                    <strong>3.Setting Preferences :</strong><br />
                                    <br />Criteria: Define your preferences regarding age, location, interests, values,
                                    and relationship expectations.Filters: Utilize search filters offered by the platform
                                    to narrow down potential matches based on your criteria.<br /><br />

                                    <strong>4.Engaging with Potential Matches :</strong><br />
                                    <br />Initiating Contact: Send thoughtful messages that show genuine interest
                                     in the other person's profile.Respect Boundaries: Respect personal boundaries
                                      and avoid sending unsolicited or overly personal messages.<br /><br />

                                      <strong>5.Communication Tips :</strong><br />
                                    <br />Openness: Be open and honest in your conversations to build trust and connection.Active
                                     Listening: Practice active listening to understand the other person's perspective and interests.
                                     <br /><br />
                                     
                                     <strong>6.Safety Measures :</strong><br />
                                    <br />
                                    Privacy Awareness: Avoid sharing sensitive personal information such as home 
                                    address or financial details early in the interaction.Meeting in Person: When
                                     meeting in person, choose public locations and inform a friend or family member
                                      about your plans.


                                     <br /><br />

                                     

                                </p>
                            </div>
                        </div>
                    </Carousel.Item>

                    {/* Slide 2 */}
                    <Carousel.Item>
                        <div className="flex flex-col items-center px-2 max-h-[70vh] md:max-h-full overflow-y-scroll md:overflow-visible">
                            <h2 className="font-bold text-lg text-center mb-3 text-pink-600">Sukhvivah guide to international online dating</h2>
                            <div className='px-3 text-sm justify-center'>
                                <p className="text-start">
                                    <strong>1. Choose a Reliable Platform :</strong><br />
                                    <br />Opt for reputable international dating websites or apps that cater 
                                    to your preferences (e.g., specific regions, languages, cultures).

                                        <br /><br />

                                    <strong>2. Understand Cultural Differences :</strong>  <br /><br />
                                    Research and respect cultural norms and differences, including dating 
                                    etiquette, values, and traditions of the countries you're interested in.


                                     <br /><br />

                                    <strong>3.Language Considerations :</strong><br />
                                    <br />If you're communicating with someone who speaks a different language,
                                     consider using translation tools or learning basic phrases to facilitate better understanding.
                                     <br /><br />




                                    <strong>4.Be Clear About Your Intentions :</strong><br />
                                    <br />Clearly communicate what you're looking for in a partner and understand what
                                     your potential match seeks, especially regarding long-term goals, relocation
                                      possibilities, etc.
                                      <br /><br />



                                      <strong>5.Respect Time Zones :</strong><br />
                                    <br />Be mindful of time differences when scheduling chats or video calls.
                                     Flexibility and understanding are key to maintaining communication.
                                     <br /><br />


                                    

                                     

                                </p>
                            </div>
                        </div>
                    </Carousel.Item>

                    {/* Slide 3 */}
                    <Carousel.Item>
                        <div className="flex flex-col items-center max-h-[70vh] md:max-h-full overflow-y-scroll md:overflow-visible">
                            <h2 className="font-bold text-lg mb-3 text-pink-700">International Friendships</h2>
                            <div className='px-3 text-sm justify-center'>
                                <p className="text-start">
                                    <strong>1. Initiate Conversations Thoughtfully :</strong><br />
                                    <br />Start conversations by introducing yourself briefly and 
                                    expressing genuine interest in learning about their culture, language,
                                     or shared interests. Avoid generic messages and show curiosity

.<br /><br />

                                    <strong>2. Be Respectful of Cultural Differences :
                                    </strong>  <br /><br />Understand and respect cultural nuances, traditions, and sensitivities. 
                                    Ask questions respectfully and be open to learning from their perspectives.
<br /><br />

                                    <strong>3. Use Video Calls :
                                    </strong><br />
                                    <br />Once you've built some rapport, consider moving conversations to video calls.
                                     This helps build a deeper connection and allows you to communicate more effectively.

<br /><br />

                                    <strong>4. Share Experiences :
                                    </strong><br />
                                    <br />Share stories, experiences, and aspects of your own culture. Be willing to
                                     exchange insights and discuss similarities and differences.

<br /><br />

                                      <strong>5. Be Patient and Understanding :</strong><br />
                                    <br />Building meaningful friendships takes time. Be patient with language barriers,
                                     time zone differences, and varying communication styles.


                                     <br /><br />
                                     
                                     <strong>6. Stay Safe Online :
                                     </strong><br />
                                    <br />
                                    Protect your privacy by being cautious about sharing personal information.
                                     Use secure platforms and be mindful of potential scams or fraudulent activities.



                                     <br /><br />

                                     

                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};
