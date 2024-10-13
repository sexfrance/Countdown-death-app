import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Component({
  onAccept,
  onDeny,
}: {
  onAccept: () => void;
  onDeny: () => void;
}) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 1) {
      setIsScrolledToBottom(true);
    }
  };

  return (
    <Card className="w-full max-w-4xl font-sans  mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-center">
          End User License Agreement
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[70vh] pr-4" onScroll={handleScroll}>
          <div className="space-y-6">
            <p className="text-lg font-semibold">
              Welcome to <span className="text-red-500">Countdown</span>. This
              End User License Agreement ("Agreement") is a binding contract
              between you ("User", "you", or "your") and Countdown App Inc.
              ("Company", "we", "us", or "our").
            </p>
            <p>
              PLEASE READ THIS AGREEMENT CAREFULLY. BY ACCESSING OR USING THE
              COUNTDOWN APPLICATION ("APP"), YOU AGREE TO BE BOUND BY THE TERMS
              AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE TO ALL THE
              TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MAY NOT USE THE APP.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                1.1. By downloading, installing, accessing, or using the App,
                you acknowledge that you have read, understood, and agree to be
                bound by this Agreement and any future amendments and additions
                to this Agreement as published from time to time at
                https://www.countdownapp.com/eula.
              </p>
              <p>
                1.2. We reserve the right to modify, amend, or change the terms
                of this Agreement at any time, effective upon posting of an
                updated version of this Agreement on the App. You are
                responsible for regularly reviewing this Agreement. Continued
                use of the App after any such changes shall constitute your
                consent to such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                2. The Countdown Timer
              </h2>
              <p>
                2.1. The App provides a personalized countdown timer ("Timer")
                that displays the time remaining until a predetermined event in
                your life. You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Timer is not a random generator but reflects actual time
                  remaining until your predetermined fate.
                </li>
                <li>
                  Once the Timer reaches zero, you will face an event beyond
                  your control.
                </li>
                <li>
                  The Company does not determine, influence, or have any control
                  over the event that occurs when your Timer reaches zero.
                </li>
              </ul>
              <p>
                2.2. You understand and accept that the Timer may cause
                significant psychological stress, anxiety, or other emotional
                responses. The Company is not responsible for any mental health
                issues that may arise from using the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                3. Alterations and Uninstallations
              </h2>
              <p>
                3.1. You agree not to modify, reverse engineer, decompile, or
                disassemble the App, in whole or in part, or create any
                derivative works from or sublicense any rights in the App,
                unless otherwise expressly authorized in writing by the Company.
              </p>
              <p>
                3.2. Any attempt to alter, tamper with, or uninstall this App
                may result in immediate and unforeseen consequences, including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceleration of your countdown</li>
                <li>Permanent damage to your device</li>
                <li>Irreversible changes to your predetermined fate</li>
                <li>Legal action by the Company</li>
              </ul>
              <p>
                3.3. The Company reserves the right to remotely disable or
                delete your App if any unauthorized alterations are detected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                4. Sharing Restrictions
              </h2>
              <p>
                4.1. Sharing your countdown with others is strictly prohibited.
                This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verbally telling others about your remaining time</li>
                <li>Showing your Timer to others</li>
                <li>
                  Posting screenshots or descriptions of your Timer on social
                  media or any other platform
                </li>
                <li>Writing down or recording your Timer in any form</li>
              </ul>
              <p>
                4.2. You acknowledge that sharing your countdown may alter the
                course of your fate and the fate of others, leading to outcomes
                that neither you nor others can anticipate.
              </p>
              <p>
                4.3. The Company reserves the right to immediately terminate
                your access to the App if you are found to be in violation of
                these sharing restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                5. Irreversibility
              </h2>
              <p>
                5.1. You understand and agree that once initiated, the countdown
                cannot be paused, reset, stopped, or altered in any way.
              </p>
              <p>
                5.2. The Company holds no responsibility for any distress,
                anxiety, life changes, or fatality that may occur as a result of
                using the App.
              </p>
              <p>
                5.3. You acknowledge that by using the App, you are accepting
                the inevitability of the event that will occur when your Timer
                reaches zero.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                6. Limitation of Liability
              </h2>
              <p>
                6.1. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO
                EVENT SHALL THE COMPANY, ITS AFFILIATES, AGENTS, DIRECTORS,
                EMPLOYEES, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY INDIRECT,
                PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY
                DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
                PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, ARISING
                OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE APP.
              </p>
              <p>
                6.2. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE
                COMPANY ASSUMES NO LIABILITY FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Any actions taken or not taken based on the information
                  provided by the App
                </li>
                <li>
                  Any psychological or emotional distress caused by the App
                </li>
                <li>
                  Any life-altering decisions made as a result of using the App
                </li>
                <li>
                  Any physical harm or death that may occur when your Timer
                  reaches zero
                </li>
                <li>Any changes to your predetermined fate</li>
              </ul>
              <p>
                6.3. You agree to defend, indemnify and hold harmless the
                Company and its licensee and licensors, and their employees,
                contractors, agents, officers and directors, from and against
                any and all claims, damages, obligations, losses, liabilities,
                costs or debt, and expenses (including but not limited to
                attorney's fees), resulting from or arising out of your use and
                access of the App, or any breach by you of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">7. Privacy Policy</h2>
              <p>
                7.1. We value your privacy and are committed to protecting your
                personal data. Our Privacy Policy, available at
                https://www.countdownapp.com/privacy, is incorporated into this
                Agreement by reference.
              </p>
              <p>
                7.2. By using the App, you agree that we may collect, use, and
                share your information as described in our Privacy Policy.
              </p>
              <p>
                7.3. You acknowledge that the App may require access to certain
                features of your device, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Camera</li>
                <li>Microphone</li>
                <li>Location services</li>
                <li>Biometric data</li>
                <li>Contacts</li>
                <li>Calendar</li>
              </ul>
              <p>
                7.4. The Company reserves the right to use any data collected
                for the purpose of maintaining and improving the accuracy of
                your Timer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
              <p>
                8.1. This Agreement shall be governed by and construed in
                accordance with the laws of the State of Delaware, without
                regard to its conflict of law provisions.
              </p>
              <p>
                8.2. Any dispute arising from or relating to the subject matter
                of this Agreement shall be finally settled in Delaware, by
                confidential binding arbitration in accordance with the rules of
                the American Arbitration Association.
              </p>
              <p>
                8.3. You agree that the Company may seek injunctive relief (or
                an equivalent type of urgent legal relief) in any jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">9. Disclaimer</h2>
              <p className="font-bold text-red-500">
                THIS APPLICATION IS INTENDED FOR ENTERTAINMENT PURPOSES ONLY. IT
                DOES NOT PREDICT OR INFLUENCE REAL-LIFE EVENTS. ANY SIMILARITIES
                TO ACTUAL EVENTS ARE PURELY COINCIDENTAL.
              </p>
              <p>
                9.1. THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
                THE COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
                WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE AND NON-INFRINGEMENT.
              </p>
              <p>
                9.2. THE COMPANY MAKES NO WARRANTY THAT (I) THE APP WILL MEET
                YOUR REQUIREMENTS, (II) THE APP WILL BE UNINTERRUPTED, TIMELY,
                SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED
                FROM THE USE OF THE APP WILL BE ACCURATE OR RELIABLE, OR (IV)
                THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER
                MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE APP WILL MEET
                YOUR EXPECTATIONS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                10. Updates to Terms
              </h2>
              <p>
                10.1. We reserve the right to modify these terms at any time.
                Your continued use of the App signifies your acceptance of any
                updated terms.
              </p>
              <p>
                10.2. It is your responsibility to check this Agreement
                periodically for changes. If you object to any provision of this
                Agreement or any changes to this Agreement, your only recourse
                is to immediately terminate use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">11. Termination</h2>
              <p>
                11.1. We may terminate or suspend access to our App immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms.
              </p>
              <p>
                11.2. Upon termination, your right to use the App will
                immediately cease. However, your Timer will continue to
                countdown, regardless of your access to the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">12. Survival</h2>
              <p>
                All provisions of this Agreement which by their nature should
                survive termination shall survive termination, including,
                without limitation, ownership provisions, warranty disclaimers,
                indemnity and limitations of liability.
              </p>
            </section>

            <p className="font-semibold text-lg mt-8">
              BY CLICKING "ACCEPT" BELOW, YOU ACKNOWLEDGE THAT YOU HAVE READ AND
              UNDERSTOOD THIS AGREEMENT AND AGREE TO BE BOUND BY ITS TERMS. IF
              YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THIS
              APPLICATION.
            </p>
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agree to the terms
          </Label>
        </div>
        <div className="flex justify-end space-x-4 w-full">
          <Button variant="destructive" onClick={onDeny}>
            Deny
          </Button>
          <Button variant="default" onClick={onAccept} disabled={!isChecked}>
            Accept
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
