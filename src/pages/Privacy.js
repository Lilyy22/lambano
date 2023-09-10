import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { Link } from "react-router-dom";
import TblContentSideBar from "../components/common/TblContentSideBar";

const Privacy = () => {
  return (
    <>
      <AppLayout>
        <section className="max-w-[1280px] mx-auto py-20 text-gray-200">
          <div className="flex flex-wrap md:flex-nowrap relative">
            {/* navigator */}
            <div className="w-1/4 ml-2 mr-6 hidden md:block">
              <nav className="sticky top-24 z-40">
                <h2 className="text-lg font-bold mb-4 text-gray-500">
                  Privacy Policy
                </h2>
                <ul className="pl-4 border-l-2 border-gray-800 text-gray-600">
                  <TblContentSideBar
                    title="Automatic collection of information"
                    link="#section1"
                  />
                  <TblContentSideBar
                    title="Collection of personal information"
                    link="#section2"
                  />
                  <TblContentSideBar
                    title="Privacy of children"
                    link="#section3"
                  />
                  <TblContentSideBar
                    title="Use and processing of collected information"
                    link="#section4"
                  />
                  <TblContentSideBar
                    title="Managing information"
                    link="#section5"
                  />
                  <TblContentSideBar
                    title="Disclosure of information"
                    link="#section6"
                  />
                  <TblContentSideBar
                    title="Retention of information"
                    link="#section7"
                  />
                  <TblContentSideBar title="Cookies" link="#section8" />
                  <TblContentSideBar title="Data analytics" link="#section9" />
                  <TblContentSideBar
                    title="Do Not Track signals"
                    link="#section10"
                  />
                  <TblContentSideBar
                    title="Social media features"
                    link="#section11"
                  />
                  <TblContentSideBar
                    title="Email marketing"
                    link="#section12"
                  />
                  <TblContentSideBar
                    title="Links to other resources"
                    link="#section13"
                  />
                  <TblContentSideBar
                    title="Information security"
                    link="#section14"
                  />
                  <TblContentSideBar title="Data breach" link="#section15" />
                  <TblContentSideBar
                    title="Changes and amendments"
                    link="#section16"
                  />
                  <TblContentSideBar
                    title="Acceptance of this policy"
                    link="#section17"
                  />
                </ul>
              </nav>
            </div>

            <div className="w-full md:flex-1 text-base px-2">
              <h1 className="font-bold text-3xl">Privacy Policy</h1>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We respect your privacy and are committed to protecting it
                through our compliance with this privacy policy (“Policy”). This
                Policy describes the types of information we may collect from
                you or that you may provide (“Personal Information”) on the
                lambanometals.com website (“Website” or “Service”) and any of
                its related products and services (collectively, “Services”),
                and our practices for collecting, using, maintaining,
                protecting, and disclosing that Personal Information. It also
                describes the choices available to you regarding our use of your
                Personal Information and how you can access and update it.
              </p>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                This Policy is a legally binding agreement between you (“User”,
                “you” or “your”) and Lambano Metals PLC (“Lambano Metals PLC”,
                “we”, “us” or “our”). If you are entering into this Policy on
                behalf of a business or other legal entity, you represent that
                you have the authority to bind such an entity to this Policy, in
                which case the terms “User”, “you” or “your” shall refer to such
                entity. If you do not have such authority, or if you do not
                agree with the terms of this Policy, you must not accept this
                Policy and may not access and use the Website and Services. By
                accessing and using the Website and Services, you acknowledge
                that you have read, understood, and agree to be bound by the
                terms of this Policy. This Policy does not apply to the
                practices of companies that we do not own or control, or to
                individuals that we do not employ or manage.
              </p>
              <h3 className="font-bold" id="section1">
                Automatic collection of information
              </h3>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                When you open the Website, our servers automatically record
                information that your browser sends. This data may include
                information such as your device’s IP address, browser type, and
                version, operating system type and version, language preferences
                or the webpage you were visiting before you came to the Website
                and Services, pages of the Website and Services that you visit,
                the time spent on those pages, information you search for on the
                Website, access times and dates, and other statistics.
              </p>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Information collected automatically is used only to identify
                potential cases of abuse and establish statistical information
                regarding the usage and traffic of the Website and Services.
                This statistical information is not otherwise aggregated in such
                a way that would identify any particular User of the system.
              </p>
              <h3 className="font-bold" id="section2">
                Collection of personal information
              </h3>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                You can access and use the Website and Services without telling
                us who you are or revealing any information by which someone
                could identify you as a specific, identifiable individual. If,
                however, you wish to use some of the features offered on the
                Website, you may be asked to provide certain Personal
                Information (for example, your name and e-mail address).
              </p>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We receive and store any information you knowingly provide to us
                when you create an account, or fill any forms on the Website.
                When required, this information may include the following:
              </p>
              <ul className="list-disc text-gray-500 pl-4">
                <li>
                  Account details (such as user name, unique user ID, password,
                  etc)
                </li>
                <li>
                  Contact information (such as email address, phone number, etc)
                </li>
                <li>
                  Basic personal information (such as name, country of
                  residence, etc)
                </li>
                <li>
                  Geolocation data of your device (such as latitude and
                  longitude)
                </li>
                <li>
                  Any other materials you willingly submit to us (such as
                  articles, images, feedback, etc)
                </li>
              </ul>
              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                You can choose not to provide us with your Personal Information,
                but then you may not be able to take advantage of some of the
                features on the Website. Users who are uncertain about what
                information is mandatory are welcome to contact us.
              </p>

              <h3 className="font-bold" id="section3">
                Privacy of children
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We do not knowingly collect any Personal Information from
                children under the age of 18. If you are under the age of 18,
                please do not submit any Personal Information through the
                Website and Services. If you have reason to believe that a child
                under the age of 18 has provided Personal Information to us
                through the Website and Services, please contact us to request
                that we delete that child&rsquo;s Personal Information from our
                Services.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We encourage parents and legal guardians to monitor their
                children&rsquo;s Internet usage and to help enforce this Policy
                by instructing their children never to provide Personal
                Information through the Website and Services without their
                permission. We also ask that all parents and legal guardians
                overseeing the care of children take the necessary precautions
                to ensure that their children are instructed to never give out
                Personal Information when online without their permission.
              </p>

              <h3 className="font-bold" id="section4">
                Use and processing of collected information
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We act as a data controller and a data processor when handling
                Personal Information, unless we have entered into a data
                processing agreement with you in which case you would be the
                data controller and we would be the data processor.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Our role may also differ depending on the specific situation
                involving Personal Information. We act in the capacity of a data
                controller when we ask you to submit your Personal Information
                that is necessary to ensure your access and use of the Website
                and Services. In such instances, we are a data controller
                because we determine the purposes and means of the processing of
                Personal Information.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We act in the capacity of a data processor in situations when
                you submit Personal Information through the Website and
                Services. We do not own, control, or make decisions about the
                submitted Personal Information, and such Personal Information is
                processed only in accordance with your instructions. In such
                instances, the User providing Personal Information acts as a
                data controller.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                In order to make the Website and Services available to you, or
                to meet a legal obligation, we may need to collect and use
                certain Personal Information. If you do not provide the
                information that we request, we may not be able to provide you
                with the requested products or services. Any of the information
                we collect from you may be used for the following purposes:
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                - Create and manage user accounts - Send administrative
                information - Send product and service updates - Respond to
                inquiries and offer support - Request user feedback - Improve
                user experience - Enforce terms and conditions and policies -
                Protect from abuse and malicious users - Respond to legal
                requests and prevent harm - Run and operate the Website and
                Services
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Processing your Personal Information depends on how you interact
                with the Website and Services, where you are located in the
                world and if one of the following applies: (i) you have given
                your consent for one or more specific purposes; (ii) provision
                of information is necessary for the performance of this Policy
                with you and/or for any pre-contractual obligations thereof;
                (iii) processing is necessary for compliance with a legal
                obligation to which you are subject; (iv) processing is related
                to a task that is carried out in the public interest or in the
                exercise of official authority vested in us; (v) processing is
                necessary for the purposes of the legitimate interests pursued
                by us or by a third party. We may also combine or aggregate some
                of your Personal Information in order to better serve you and to
                improve and update our Website and Services.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Note that under some legislations we may be allowed to process
                information until you object to such processing by opting out,
                without having to rely on consent or any other of the legal
                bases. In any case, we will be happy to clarify the specific
                legal basis that applies to the processing, and in particular
                whether the provision of Personal Information is a statutory or
                contractual requirement, or a requirement necessary to enter
                into a contract.
              </p>

              <h3 className="font-bold" id="section5">
                Managing information
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                You are able to delete certain Personal Information we have
                about you. The Personal Information you can delete may change as
                the Website and Services change. When you delete Personal
                Information, however, we may maintain a copy of the unrevised
                Personal Information in our records for the duration necessary
                to comply with our obligations to our affiliates and partners,
                and for the purposes described below. If you would like to
                delete your Personal Information or permanently delete your
                account, you can do so on the settings page of your account on
                the Website or simply by contacting us.
              </p>

              <h3 className="font-bold" id="section6">
                Disclosure of information
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Depending on the requested Services or as necessary to complete
                any transaction or provide any Service you have requested, we
                may share your information with our affiliates, contracted
                companies, and service providers (collectively, &ldquo;Service
                Providers&rdquo;) we rely upon to assist in the operation of the
                Website and Services available to you and whose privacy policies
                are consistent with ours or who agree to abide by our policies
                with respect to Personal Information. We will not share any
                personally identifiable information with third parties and will
                not share any information with unaffiliated third parties.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Service Providers are not authorized to use or disclose your
                information except as necessary to perform services on our
                behalf or comply with legal requirements. Service Providers are
                given the information they need only in order to perform their
                designated functions, and we do not authorize them to use or
                disclose any of the provided information for their own marketing
                or other purposes.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We may also disclose any Personal Information we collect, use or
                receive if required or permitted by law, such as to comply with
                a subpoena or similar legal process, and when we believe in good
                faith that disclosure is necessary to protect our rights,
                protect your safety or the safety of others, investigate fraud,
                or respond to a government request.
              </p>

              <h3 className="font-bold" id="section7">
                Retention of information
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We will retain and use your Personal Information for the period
                necessary to comply with our legal obligations, as long as your
                user account remains active, to enforce our Policy, resolve
                disputes, and unless a longer retention period is required or
                permitted by law.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We may use any aggregated data derived from or incorporating
                your Personal Information after you update or delete it, but not
                in a manner that would identify you personally. Once the
                retention period expires, Personal Information shall be deleted.
                Therefore, the right to access, the right to erasure, the right
                to rectification, and the right to data portability cannot be
                enforced after the expiration of the retention period.
              </p>

              <h3 className="font-bold" id="section8">
                Cookies
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Our Website and Services use &ldquo;cookies&rdquo; to help
                personalize your online experience. A cookie is a text file that
                is placed on your hard disk by a web page server. Cookies cannot
                be used to run programs or deliver viruses to your computer.
                Cookies are uniquely assigned to you, and can only be read by a
                web server in the domain that issued the cookie to you.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We may use cookies to collect, store, and track information for
                security and personalization, and for statistical purposes. For
                further information on the cookies we collect and their purpose,
                see our cookie policy. Please note that you have the ability to
                accept or decline cookies. Most web browsers automatically
                accept cookies by default, but you can modify your browser
                settings to decline cookies if you prefer.
              </p>

              <h3 className="font-bold" id="section9">
                Data analytics
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Our Website and Services may use third-party analytics tools
                that use cookies, web beacons, or other similar
                information-gathering technologies to collect standard internet
                activity and usage information. The information gathered is used
                to compile statistical reports on User activity such as how
                often Users visit our Website and Services, what pages they
                visit and for how long, etc. We use the information obtained
                from these analytics tools to monitor the performance and
                improve our Website and Services. We do not use third-party
                analytics tools to track or to collect any personally
                identifiable information of our Users and we will not associate
                any information gathered from the statistical reports with any
                individual User.
              </p>

              <h3 className="font-bold" id="section10">
                Do Not Track signals
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Some browsers incorporate a Do Not Track feature that signals to
                websites you visit that you do not want to have your online
                activity tracked. Tracking is not the same as using or
                collecting information in connection with a website. For these
                purposes, tracking refers to collecting personally identifiable
                information from consumers who use or visit a website or online
                service as they move across different websites over time. The
                Website and Services do not track its visitors over time and
                across third-party websites. However, some third-party websites
                may keep track of your browsing activities when they serve you
                content, which enables them to tailor what they present to you.
                For a description of Do Not Track protocols for browsers and
                mobile devices or to learn more about the choices available to
                you, visit internetcookies.com
              </p>

              <h3 className="font-bold" id="section11">
                Social media features
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Our Website and Services may include social media features, such
                as the Facebook and Twitter buttons, Share This buttons, etc
                (collectively, &ldquo;Social Media Features&rdquo;). These
                Social Media Features may collect your IP address, what page you
                are visiting on our Website and Services, and may set a cookie
                to enable Social Media Features to function properly. Social
                Media Features are hosted either by their respective providers
                or directly on our Website and Services. Your interactions with
                these Social Media Features are governed by the privacy policy
                of their respective providers.
              </p>

              <h3 className="font-bold" id="section12">
                Email marketing
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We offer electronic newsletters to which you may voluntarily
                subscribe at any time. We are committed to keeping your e-mail
                address confidential and will not disclose your email address to
                any third parties except as allowed in the information use and
                processing section or for the purposes of utilizing a
                third-party provider to send such emails. We will maintain the
                information sent via e-mail in accordance with applicable laws
                and regulations.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                In compliance with the CAN-SPAM Act, all e-mails sent from us
                will clearly state who the e-mail is from and provide clear
                information on how to contact the sender. You may choose to stop
                receiving our newsletter or marketing emails by following the
                unsubscribe instructions included in these emails or by
                contacting us. However, you will continue to receive essential
                transactional emails.
              </p>

              <h3 className="font-bold">Push notifications</h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We offer push notifications to which you may also voluntarily
                subscribe at any time. To make sure push notifications reach the
                correct devices, we use a third-party push notifications
                provider who relies on a device token unique to your device
                which is issued by the operating system of your device. While it
                is possible to access a list of device tokens, they will not
                reveal your identity, your unique device ID, or your contact
                information to us or our third-party push notifications
                provider. We will maintain the information sent via e-mail in
                accordance with applicable laws and regulations. If, at any
                time, you wish to stop receiving push notifications, simply
                adjust your device settings accordingly.
              </p>

              <h3 className="font-bold" id="section13">
                Links to other resources
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                The Website and Services contain links to other resources that
                are not owned or controlled by us. Please be aware that we are
                not responsible for the privacy practices of such other
                resources or third parties. We encourage you to be aware when
                you leave the Website and Services and to read the privacy
                statements of each and every resource that may collect Personal
                Information.
              </p>

              <h3 className="font-bold" id="section14">
                Information security
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We secure information you provide on computer servers in a
                controlled, secure environment, protected from unauthorized
                access, use, or disclosure. We maintain reasonable
                administrative, technical, and physical safeguards in an effort
                to protect against unauthorized access, use, modification, and
                disclosure of Personal Information in our control and custody.
                However, no data transmission over the Internet or wireless
                network can be guaranteed.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                Therefore, while we strive to protect your Personal Information,
                you acknowledge that (i) there are security and privacy
                limitations of the Internet which are beyond our control; (ii)
                the security, integrity, and privacy of any and all information
                and data exchanged between you and the Website and Services
                cannot be guaranteed; and (iii) any such information and data
                may be viewed or tampered with in transit by a third party,
                despite best efforts.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                As the security of Personal Information depends in part on the
                security of the device you use to communicate with us and the
                security you use to protect your credentials, please take
                appropriate measures to protect this information.
              </p>

              <h3 className="font-bold" id="section15">
                Data breach
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                In the event we become aware that the security of the Website
                and Services has been compromised or Users&rsquo; Personal
                Information has been disclosed to unrelated third parties as a
                result of external activity, including, but not limited to,
                security attacks or fraud, we reserve the right to take
                reasonably appropriate measures, including, but not limited to,
                investigation and reporting, as well as notification to and
                cooperation with law enforcement authorities. In the event of a
                data breach, we will make reasonable efforts to notify affected
                individuals if we believe that there is a reasonable risk of
                harm to the User as a result of the breach or if notice is
                otherwise required by law. When we do, we will post a notice on
                the Website, send you an email.
              </p>

              <h3 className="font-bold" id="section16">
                Changes and amendments
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We reserve the right to modify this Policy or its terms related
                to the Website and Services at any time at our discretion. When
                we do, we will revise the updated date at the bottom of this
                page. We may also provide notice to you in other ways at our
                discretion, such as through the contact information you have
                provided.
              </p>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                An updated version of this Policy will be effective immediately
                upon the posting of the revised Policy unless otherwise
                specified. Your continued use of the Website and Services after
                the effective date of the revised Policy (or such other act
                specified at that time) will constitute your consent to those
                changes. However, we will not, without your consent, use your
                Personal Information in a manner materially different than what
                was stated at the time your Personal Information was collected.
              </p>

              <h3 className="font-bold" id="section17">
                Acceptance of this policy
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                You acknowledge that you have read this Policy and agree to all
                its terms and conditions. By accessing and using the Website and
                Services and submitting your information you agree to be bound
                by this Policy. If you do not agree to abide by the terms of
                this Policy, you are not authorized to access or use the Website
                and Services. This privacy policy was created with the help of
                https://www.websitepolicies.com/privacy-policy-generator
              </p>

              <h3 className="font-bold" id="section18">
                Contacting us
              </h3>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                If you have any questions, concerns, or complaints regarding
                this Policy, the information we hold about you, or if you wish
                to exercise your rights, we encourage you to contact us using
                the details below:
              </p>

              <Link to="/contact" className="mb-4 text-blue-500 underline">
                https://www.lambanometals.com/contact/support@lambanometals.com
              </Link>

              <p className="my-10 text-gray-500 text-justify text-sm lg:text-base">
                We will attempt to resolve complaints and disputes and make
                every reasonable effort to honor your wish to exercise your
                rights as quickly as possible and in any event, within the
                timescales provided by applicable data protection laws.
              </p>

              <p className="my-10 italic">
                This document was last updated on August 22, 2023
              </p>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default Privacy;
